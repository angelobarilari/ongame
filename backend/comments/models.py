from django.db import models
from django.utils import timezone

from users.models import User

# Create your models here.


class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)

    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="comments"
    )

    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now())
    updated_at = models.DateTimeField(auto_now=True)
