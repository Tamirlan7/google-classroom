from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from .models import CustomUser
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from .serializers import UserSerializer
from user_profile.models import Profile
from django.shortcuts import get_object_or_404


@method_decorator(csrf_protect, name='dispatch')
class RegisterUser(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        data = self.request.data

        if 'username' not in data:
            return Response({'error': 'make sure that you passed username key'})
        if 'password' not in data:
            return Response({'error': 'make sure that you passed password key'})
        if 're_password' not in data:
            return Response({'error': 'make sure that you passed re_password key'})

        username = data['username']
        password = data['password']
        re_password = data['re_password']

        try:
            if re_password != password:
                return Response({'error': 'the password does not match'})

            if CustomUser.objects.filter(username=username).exists():
                return Response({'error': 'User with this username already exists'})

            if len(str(password)) < 6:
                return Response({'error': 'password must be at least 6 characters'})

            user = CustomUser.objects.create_user(username=username, password=password)
            Profile.objects.create(user=user)

            user = authenticate(username=username, password=password)

            if user is not None:
                login(request, user)

            return Response({'success': 'account successfully created'})
        except:
            return Response({'error': 'something went wrong while registration'})


class CheckAuthenticated(APIView):

    def get(self, request):
        isAuthenticated = self.request.user.is_authenticated

        try:
            if isAuthenticated:
                return Response({'success': 'User is authenticated'})
            else:
                return Response({'error': 'User is not authenticated'})
        except:
            return Response({'error': 'something went wrong while checking whether user is authenticated or not'})


@method_decorator(csrf_protect, name='dispatch')
class LoginUser(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        data = request.data

        if 'username' not in data:
            return Response({'error': 'make sure that you passed username key'})
        if 'password' not in data:
            return Response({'error': 'make sure that you passed password key'})

        password = data['password']
        username = data['username']

        try:
            user = authenticate(username=username, password=password)

            if request.user.is_authenticated:
                return Response({"error": "user is already authenticated"})

            if user is not None:
                login(request, user)
                return Response({'success': 'User is logged in'})
            else:
                return Response({'error': 'User does not exist'})

            return Response({'error': 'Authenticate Error'})

        except:
            return Response({'error': 'something went wrong while logging in'})


class LogoutUser(APIView):

    def post(self, request):

        try:
            logout(request)
            return Response({'success': 'User is logged out'})
        except:
            return Response({'error': 'something went wrong while logging out'})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request):
        return Response({'success': 'CSRF cookie set'})


class GetUserView(APIView):
    permissions_classes = (permissions.AllowAny,)

    def get(self, request):
        try:
            user = get_object_or_404(CustomUser, id=request.user.id)
            user = UserSerializer(user, many=False)
            return Response({'success': user.data})
        except:
            return Response({'error': 'something went wrong while receiving user'})


class GetUsersView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request):
        users = CustomUser.objects.all()
        users = UserSerializer(users, many=True)
        return Response(users.data)
