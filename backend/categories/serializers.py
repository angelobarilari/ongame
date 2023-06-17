from rest_framework import serializers

from .models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        read_only_fields = ["category_id"]

    category_id = serializers.IntegerField(read_only=True)
    category = serializers.CharField(max_length=100)
