from rest_framework.serializers import ModelSerializer
from .models import Room, Task, Comment


class RoomSerializer(ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'


class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
