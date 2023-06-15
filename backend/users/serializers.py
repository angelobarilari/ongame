from rest_framework import serializers
from .models import GenderChoices, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = '__all__'
    
    id = serializers.UUIDField(read_only=True)
    email = serializers.CharField(unique=True, max_length=255)
    password = serializers.CharField(write_only=True)
    name = serializers.CharField(max_length=100)
    surname = serializers.CharField(max_length=100)
    gender = serializers.ChoiceField(
        choices = GenderChoices.choices,
        default = GenderChoices.PREFER_NOT_SAY
    )

    birthdate = serializers.DateTimeField()

    def validate_email(self, value):
        if User.objects.filter(email__iexact = value).exists():
            raise serializers.ValidationError("email already exists")

        return value

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)

