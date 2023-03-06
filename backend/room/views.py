from rest_framework.views import APIView
from rest_framework.response import Response
from accounts.models import CustomUser
from user_profile.models import Profile
from .models import *
from .generate import *
from .serializers import *
from django.shortcuts import get_object_or_404


class JoinRoomApI(APIView):
    pass


class RoomApi(APIView):

    def get(self, request, code):
        try:
            room = get_object_or_404(Room, code=code)

            # Getting Tasks for this room
            tasks = Task.objects.filter(room_id=room.id)

            # Serializing the tasks
            tasks = TaskSerializer(tasks, many=True)

            # Serializing the room
            room = RoomSerializer(room, many=False)
            return Response({'success': {'room': room.data, 'tasks': tasks.data}}, status=200)
        except:
            return Response({'error': 'something went wrong while receiving the room'}, status=500)

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
        user = request.user

        try:
            if not data:
                return Response({'error': 'there is no data passed here'}, status=400)

            if 'title' not in data:
                return Response({'error': 'title was not provided'})

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
            room.owner_profile = Profile.objects.get(user_id=user.id)

            room.save()

            # Appending Room to User
            user = CustomUser.objects.get(id=request.user.id)
            user.rooms.add(room)
            user.save()

            # serializing data to return
            rooms = Room.objects.all()
            rooms = RoomSerializer(rooms, many=True)
            return Response({'success': rooms.data}, status=201)

        except:
            return Response({'error': 'something went wrong while creating the room'}, status=500)


