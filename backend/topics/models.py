from django.db import models
from django.utils import timezone

from users.models import User


class Topic(models.Model):
    topic_id = models.AutoField(primary_key=True)

    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="topics",
    )

    subject = models.TextField()
    created_at = models.DateTimeField(default=timezone.now())
    topicImage = models.ImageField(
        upload_to="topicImage/", null=True, blank=True
    )
