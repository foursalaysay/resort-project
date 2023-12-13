from django.db import models

class WaterTerraces(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    

class Vikings(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Coal(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class JSJS(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Reservation_JSJS(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    check_in_date = models.DateField()
    check_out_date = models.DateField()
    number_of_guests = models.IntegerField()
    room_type = models.CharField(max_length=100)
    mode_of_payment = models.CharField(max_length=100)
    total_amount = models.DecimalField(max_digits=8, decimal_places=0)

    def __str__(self):
        return self.full_name
    
    
class Reservation_Coal(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    check_in_date = models.DateField()
    check_out_date = models.DateField()
    number_of_guests = models.IntegerField()
    room_type = models.CharField(max_length=100)
    mode_of_payment = models.CharField(max_length=100)
    total_amount = models.DecimalField(max_digits=8, decimal_places=0)

    def __str__(self):
        return self.full_name
    
    


class Reservation_Viking(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    cottage_type = models.CharField(max_length=100)
    mode_of_payment = models.CharField(max_length=100)
    total_amount = models.DecimalField(max_digits=8, decimal_places=0)

    def __str__(self):
        return self.full_name

from django.db import models

class Reservation_Terraces(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    check_in_date = models.DateField()
    check_out_date = models.DateField()
    number_of_guests = models.IntegerField()
    room_type = models.CharField(max_length=100)
    mode_of_payment = models.CharField(max_length=100)
    total_amount = models.DecimalField(max_digits=8, decimal_places=0)

    def __str__(self):
        return self.full_name
