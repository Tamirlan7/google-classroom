from .models import *
from rest_framework import serializers


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('name', 'surname', 'nickname',
                  'phone', 'email', 'avatar',
                  'gender', 'birthday', 'personal_address',
                  'business_address', 'other_addresses')
