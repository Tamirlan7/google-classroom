# Generated by Django 4.1.5 on 2023-02-06 16:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import user_profile.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('phone', models.CharField(blank=True, max_length=30, null=True)),
                ('email', models.EmailField(blank=True, max_length=255, null=True)),
                ('avatar', models.ImageField(default='avatar/defaultAvatar.png', upload_to=user_profile.models.image_upload_path)),
                ('gender', models.BooleanField(null=True)),
                ('personal_address', models.CharField(blank=True, max_length=255, null=True)),
                ('business_address', models.CharField(blank=True, max_length=255, null=True)),
                ('other_addresses', models.CharField(blank=True, max_length=255, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
