from rest_framework import serializers

from users.serializers import UserSerializer

from categories.serializers import CategorySerializer
from categories.models import Category

from .models import Topic


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = "__all__"
        read_only_fields = ["topic_id"]

    topic_id = serializers.IntegerField(read_only=True)
    subject = serializers.CharField()
    author = UserSerializer(read_only=True)
    category = CategorySerializer(read_only=True, many=True)

    def create(self, validated_data):
        category_id = validated_data.pop("category_id")

        category = Category.objects.get(category_id=category_id)

        topic = Topic.objects.create(**validated_data)

        topic.category.set([category])

        return topic
