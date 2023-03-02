from django.db import models
from classroom import settings


def image_upload_path(instance, filename):
    return 'avatar/' + 'user_{0}/{1}'.format(instance.user.id, filename)


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    surname = models.CharField(max_length=255, blank=True, null=True)
    nickname = models.CharField(max_length=255, blank=True, null=True)
    birthday = models.DateField(null=True, blank=True)
    phone = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    avatar = models.ImageField(upload_to=image_upload_path, default='avatar/defaultAvatar.png')
    gender = models.BooleanField(null=True)
    personal_address = models.CharField(null=True, blank=True, max_length=255)
    business_address = models.CharField(null=True, blank=True, max_length=255)
    other_addresses = models.CharField(null=True, blank=True, max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.user)
