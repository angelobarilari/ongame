from django.db import models
from django.utils import timezone
import uuid

# Create your models here.

class GenderChoices(models.TextChoices):
    MALE = 'Male'
    FEMALE = 'Female'
    PREFER_NOT_SAY = 'Prefer not say'

class User(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    email = models.CharField(max_length=255)
    password = models.CharField()
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    gender = models.ChoiceField(
        choices = GenderChoices.choices,
        default = GenderChoices.PREFER_NOT_SAY
    )

    birthdate = models.DateTimeField()
    created_at = models.DateTimeField(default=timezone.now())
    updated_at = models.DateTimeField(auto_now = True)

    avatarPhoto = models.ImageField(upload_to='random/', null=True, blank=True)

