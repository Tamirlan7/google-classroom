from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .serializers import ProfileSerializer
from .models import Profile
from rest_framework.response import Response
from rest_framework import permissions


class GetProfile(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        try:
            if not Profile.objects.filter(user=request.user).exists():
                return Response({'error': 'there is no profile'})

            profile = Profile.objects.get(user=request.user)
            profile = ProfileSerializer(profile, many=False)
            return Response({'success': 'profile retrieved successfully', 'profile': profile.data})
        except:
            return Response({'error': 'something went wrong while retrieving profile'})

    def put(self, request):

        try:
            profile = Profile.objects.get(user=request.user)
            data = request.data

            if not data:
                return Response({'error': 'datas that need to be changed were not provided'})

            if 'name' in data:
                profile.name = data['name']

            if 'surname' in data:
                profile.surname = data['surname']

            if 'nickname' in data:
                profile.nickname = data['nickname']

            if 'birthday' in data:
                profile.birthday = data['birthday']

            if 'phone' in data:
                profile.phone = data['phone']

            if 'email' in data:
                profile.email = data['email']

            if 'avatar' in data:
                profile.avatar = data['avatar']

            if 'gender' in data:
                profile.gender = data['gender']

            if 'personal_address' in data:
                profile.personal_address = data['personal_address']

            if 'business_address' in data:
                profile.business_address = data['business_address']

            if 'other_addresses' in data:
                profile.other_addresses = data['other_addresses']

            profile.save()
            profile = ProfileSerializer(profile, many=False)
            return Response({'success': 'profile updated', 'profile': profile.data})
        except:
            return Response({'error': 'something went wrong while updating the profile'})

