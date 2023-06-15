from rest_framework import serializers
from .models import GenderChoices, User
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

    id = serializers.UUIDField(read_only=True)
    username = serializers.EmailField(max_length=255)
    password = serializers.CharField(write_only=True)
    name = serializers.CharField(max_length=100)
    surname = serializers.CharField(max_length=100)

    gender = serializers.ChoiceField(
        choices=GenderChoices.choices, default=GenderChoices.PREFER_NOT_SAY
    )

    birthdate = serializers.DateTimeField()

    def validate_username(self, value):
        if User.objects.filter(username__iexact=value).exists():
            raise serializers.ValidationError(
                {"detail": "Email already exists"}
            )

        return value

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])

        user = User.objects.create(**validated_data)

        return user
