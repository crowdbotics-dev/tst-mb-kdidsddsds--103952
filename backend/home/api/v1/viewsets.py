from rest_framework import viewsets
from home.models import Hello,Helloo,Pet,Customer,Salon,Customer,Hello,Helloo,Pet,Salon,Customer,Hello,Helloo,Pet,Salon
from .serializers import HelloSerializer,HellooSerializer,PetSerializer,CustomerSerializer,SalonSerializer,CustomerSerializer,HelloSerializer,HellooSerializer,PetSerializer,SalonSerializer,CustomerSerializer,HelloSerializer,HellooSerializer,PetSerializer,SalonSerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class HelloViewSet(viewsets.ModelViewSet):
    serializer_class = HelloSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Hello.objects.all()

class HellooViewSet(viewsets.ModelViewSet):
    serializer_class = HellooSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Helloo.objects.all()

class PetViewSet(viewsets.ModelViewSet):
    serializer_class = PetSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Pet.objects.all()

class CustomerViewSet(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Customer.objects.all()

class SalonViewSet(viewsets.ModelViewSet):
    serializer_class = SalonSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Salon.objects.all()
