from django.contrib import admin
from .models import *
from django.utils.html import format_html


class ProfileAdmin(admin.ModelAdmin):

    def image_tag(self, obj):
        return format_html('<img src="{}" />'.format(obj.avatar.url))

    image_tag.short_description = 'Image'

    list_display = ['user', 'image_tag', ]


admin.site.register(Profile, ProfileAdmin)
