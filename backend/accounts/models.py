from django.db import models
from django.contrib.auth.models import AbstractUser
from room.models import Room


class CustomUser(AbstractUser):
    rooms = models.ManyToManyField(Room, blank=True)
