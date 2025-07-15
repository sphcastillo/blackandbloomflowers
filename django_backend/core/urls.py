from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse  

def home(request):
    return HttpResponse("Hello to my flower shop API")

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/products/', include('products.urls')),
    path('api/cart/', include('cart.urls')),
]
