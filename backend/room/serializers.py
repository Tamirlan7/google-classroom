from rest_framework.serializers import ModelSerializer
from .models import Room, Task, Comment
from user_profile.serializers import ProfilePublicInfoSerializer


class RoomSerializer(ModelSerializer):
    owner_profile = ProfilePublicInfoSerializer(many=False, read_only=True)

    class Meta:
        model = Room
        fields = ('id', 'title', 'section',
                  'subject', 'audience', 'created_at',
                  'updated_at', 'cover', 'code',
                  'theme_color', 'owner_profile')
        depth = 1


class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'body', 'video_link',
                  'files', 'link', 'created_at',
                  'updated_at',)


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
