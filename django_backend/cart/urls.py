from django.urls import path
from .views import CartListCreateView

urlpatterns = [
    path('cart/', CartListCreateView.as_view(), name='cart'),
]