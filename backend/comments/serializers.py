from rest_framework import serializers

from users.serializers import UserSerializer

from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"
        read_only_fields = ["author", "comment_id", "topic"]

    comment_id = serializers.IntegerField(read_only=True)
    author = UserSerializer(read_only=True)
    content = serializers.CharField()
