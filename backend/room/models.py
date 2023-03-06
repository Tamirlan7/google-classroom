from django.db import models
from classroom import settings
from user_profile.models import Profile


def file_upload_path(instance, filename):
    return 'files/' + 'room_{0}/task_{1}/{2}'.format(instance.room.id, instance.id, filename)


class Room(models.Model):
    title = models.CharField(max_length=50)
    section = models.CharField(max_length=50, null=True, blank=True)
    subject = models.CharField(max_length=50, null=True, blank=True)
    audience = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    code = models.CharField(max_length=7)
    cover = models.CharField(max_length=50, default="media/cover/code.jpg")
    theme_color = models.CharField(max_length=10, default="blue")
    owner_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class Task(models.Model):
    body = models.TextField()
    video_link = models.CharField(max_length=255, null=True, blank=True)
    link = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    files = models.FileField(upload_to=file_upload_path, null=True, blank=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)


class Comment(models.Model):
    body = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
