from django.db import models
from django.utils import timezone


class GenderChoices(models.TextChoices):
    MALE = "Male"
    FEMALE = "Female"
    PREFER_NOT_SAY = "Prefer not say"


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    is_staff = models.BooleanField(default=False)
    username = models.EmailField(unique=True, max_length=255)
    password = models.TextField()
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    gender = models.CharField(
        max_length=20,
        choices=GenderChoices.choices,
        default=GenderChoices.PREFER_NOT_SAY,
    )

    birthdate = models.DateTimeField()
    created_at = models.DateTimeField(default=timezone.now())
    updated_at = models.DateTimeField(auto_now=True)

    avatarImage = models.ImageField(
        upload_to="avatarImage/", null=True, blank=True
    )
