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

            if 'name' in data:
                profile.name = data['name']

            if 'phone' in data:
                profile.phone = data['phone']

            if 'email' in data:
                profile.email = data['email']

            if 'phone' in data:
                profile.phone = data['phone']

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

            if not data:
                return Response({'success': 'nothing changed'})

            profile.save()
            profile = ProfileSerializer(profile, many=False)
            return Response({'success': 'profile updated', 'profile': profile.data})
        except:
            return Response({'error': 'something went wrong while updating the profile'})

