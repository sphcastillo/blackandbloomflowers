from django.db import models
class Product(models.Model):
    CATEGORY_CHOICES = [
        ('bouquet', 'Bouquet'),
        ('sweets', 'Sweets'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.title

class ProductVariant(models.Model):
    SIZE_CHOICES = [
        ('mini', 'Mini'),
        ('regular', 'Regular'),
        ('full', 'Full'),
    ]

    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='variants')
    size = models.CharField(max_length=20, choices=SIZE_CHOICES)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return f"{self.product.title} – {self.size.capitalize()}"