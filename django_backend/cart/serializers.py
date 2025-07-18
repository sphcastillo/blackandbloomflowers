from rest_framework import serializers
from .models import CartItem
from products.serializers import ProductVariantSerializer

class CartItemSerializer(serializers.ModelSerializer):
    variant = ProductVariantSerializer(read_only=True)
    variant_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = CartItem
        fields = ['id', 'variant', 'variant_id', 'quantity', 'get_total_price']