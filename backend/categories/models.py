from django.db import models

from topics.models import Topic


class Category(models.Model):
    category_id = models.AutoField(primary_key=True)
    category = models.CharField(max_length=100)

    topic = models.ForeignKey(
        Topic, on_delete=models.CASCADE, related_name="category", null=True
    )
