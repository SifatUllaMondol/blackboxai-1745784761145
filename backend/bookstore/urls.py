from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, CartViewSet, OrderViewSet, UserViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet, basename='book')
router.register(r'cart', CartViewSet, basename='cart')
router.register(r'orders', OrderViewSet, basename='order')
router.register(r'users', UserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
]
