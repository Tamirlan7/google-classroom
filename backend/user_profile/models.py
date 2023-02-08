from django.db import models
from django.contrib.auth.models import User


def image_upload_path(instance, filename):
    return 'avatar/' + 'user_{0}/{1}'.format(instance.user.id, filename)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    avatar = models.ImageField(upload_to=image_upload_path, default='avatar/defaultAvatar.png')
    gender = models.BooleanField(null=True)
    personal_address = models.CharField(null=True, blank=True, max_length=255)
    business_address = models.CharField(null=True, blank=True, max_length=255)
    other_addresses = models.CharField(null=True, blank=True, max_length=255)

    def __str__(self):
        return str(self.user)
