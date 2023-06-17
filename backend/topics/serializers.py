from rest_framework import serializers

from users.serializers import UserSerializer

from .models import Topic


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = "__all__"
        read_only_fields = ["topic_id"]

    topic_id = serializers.IntegerField(read_only=True)
    author = UserSerializer(read_only=True)
    subject = serializers.CharField()
