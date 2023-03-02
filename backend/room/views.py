from rest_framework.views import APIView
from rest_framework.response import Response
from accounts.models import CustomUser
from .models import *
from .generate import *
from .serializers import *


class RoomApi(APIView):

    def get(self, request, code):
        user = request.user

        try:
            room = Room.objects.get(code=code)

            # Appending the room to the user
            user = CustomUser.objects.get(id=request.user.id)
            user.rooms.add(room)
            user.save()

            # Serializing the room
            room = RoomSerializer(room, many=False)
            return Response({'success': room.data})
        except:
            return Response({'error': 'something went wrong while receiving the rooms'}, status=500)

    # def put(self, request):
    #     data = request['data']
    #
    #     try:
    #
    #     except:
    #         return Response({'error': 'something went wrong while updating the room'}, status=500)

    def post(self, request):
        data = request.data
        room = Room()

        try:
            if not data:
                return Response({'error': 'there is no data passed here'}, status=400)

            if 'audience' in data:
                room.audience = data['audience']

            if 'subject' in data:
                room.subject = data['subject']

            if 'section' in data:
                room.section = data['section']

            room.title = data['title']

            # these functions within generate.py file
            room.code = generate_room_code()
            room.theme_color = generate_theme_color()
            room.cover = generate_cover()
            room.owner = request.user

            room.save()

            # Appending Room to User
            user = CustomUser.objects.get(id=request.user.id)
            user.rooms.add(room)
            user.save()

            # serializing data to return
            room = RoomSerializer(room, many=False)
            return Response({'success': room.data}, status=201)

        except:
            return Response({'error': 'something went wrong while creating the room'}, status=500)


