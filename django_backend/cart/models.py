from django.db import models
from django.contrib.auth.models import User
from products.models import ProductVariant

class CartItem(models.Model):
    user = models.ForeignKey(
    User, on_delete=models.CASCADE, related_name="cart_items", null=True, blank=True
    )
    variant = models.ForeignKey(ProductVariant, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.quantity} x {self.variant.product.title} ({self.variant.size})"

    def get_total_price(self):
        return self.variant.price * self.quantity