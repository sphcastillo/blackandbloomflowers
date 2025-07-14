from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('bouquet', 'Bouquet'),
        ('sweets', 'Sweets'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.title

