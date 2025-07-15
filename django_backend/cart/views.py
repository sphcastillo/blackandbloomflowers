from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import CartItem
from products.models import ProductVariant

@api_view(['POST'])
@permission_classes([AllowAny])  # Use IsAuthenticated in production
def add_to_cart(request):
    variant_id = request.data.get('variant_id')
    quantity = request.data.get('quantity', 1)

    if not variant_id:
        return Response({'error': 'variant_id is required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        variant = ProductVariant.objects.get(id=variant_id)
    except ProductVariant.DoesNotExist:
        return Response({'error': 'Invalid variant_id'}, status=status.HTTP_404_NOT_FOUND)

    cart_item = CartItem.objects.create(
        user=None,  # You’ll want to replace this with the actual user logic
        variant=variant,
        quantity=quantity
    )

    return Response({
        'message': 'Item added to cart',
        'variant': variant.size,
        'quantity': quantity,
        'price': variant.price
    }, status=status.HTTP_201_CREATED)
