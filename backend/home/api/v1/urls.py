from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HelloViewSet,HellooViewSet,PetViewSet,HelloViewSet,HellooViewSet,PetViewSet,HelloViewSet,HellooViewSet,PetViewSet,HelloViewSet,HellooViewSet,PetViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('hello', HelloViewSet )
router.register('helloo', HellooViewSet )
router.register('pet', PetViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
