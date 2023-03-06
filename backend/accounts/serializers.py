from .models import CustomUser
from rest_framework import serializers
from room.serializers import RoomSerializer


class UserSerializer(serializers.ModelSerializer):
    rooms = RoomSerializer(many=True, read_only=False)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'rooms',)
        depth = 1
