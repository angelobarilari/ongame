from rest_framework import serializers
from .models import GenderChoices, User
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ["is_staff"]
        read_only_fields = ["user_id"]

    user_id = serializers.IntegerField(read_only=True)
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
        request = self.context.get("request")
        is_authenticated = request and request.user.is_authenticated

        if is_authenticated and not request.user.is_staff:
            raise serializers.ValidationError(
                {"Detail": "You do not have permission to create a user with is_staff=True."}
            )

        password = validated_data.pop("password")
        validated_data["password"] = make_password(password)

        return User.objects.create(**validated_data)


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        read_only_fields = ["user_id"]
        extra_kwargs = {
            "password": {"write_only": True},
        }

    def create(self, validated_data):
        validated_data["is_staff"] = True

        return User.objects.create(**validated_data)


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
