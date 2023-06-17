from django.db import models

import uuid

# Create your models here.


class Topic(models.Model):
    id = models.UUIDField(
        primary_key=True,
        unique=True,
        default=uuid.uuid4,
        editable=False,
    )
