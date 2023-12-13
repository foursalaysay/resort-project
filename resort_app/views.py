from django.shortcuts import render
from django.http import HttpResponseRedirect


from .models import WaterTerraces
from .models import Vikings
from .models import Coal
from .models import JSJS
from .models import Reservation_JSJS
from .models import Reservation_Coal
from .models import Reservation_Viking
from .models import Reservation_Terraces


def home(request):
    # Add your logic for the home view
    return render(request, 'landing.html')

def resort_1(request):
    # Add your logic for resort_1 view
    return render(request, 'new.html')

def resort_2(request):
    # Add your logic for resort_2 view
    return render(request, 'resort2.html')

def resort_3(request):
    # Add your logic for resort_3 view
    return render(request, 'resort3.html')

def resort_4(request):
    # Add your logic for resort_4 view
    return render(request, 'resort4.html')


def submit_form4(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Save the form data to the database
        contact = WaterTerraces(name=name, email=email, message=message)
        contact.save()
        success_message = 'Feedback sent successfully!'
        
        # Redirect to a success page or render a template
        return render(request, 'resort4.html', {'success_message': success_message})
        
    
    # If the request method is not POST, render the form template
    return render(request, 'resort4.html')

def submit_form3(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Save the form data to the database
        contact = Vikings(name=name, email=email, message=message)
        contact.save()
        success_message = 'Feedback sent successfully!'
        
        # Redirect to a success page or render a template
        return render(request, 'resort3.html', {'success_message': success_message})
        
    
    # If the request method is not POST, render the form template
    return render(request, 'resort3.html')

def submit_form2(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Save the form data to the database
        contact = Coal(name=name, email=email, message=message)
        contact.save()
        success_message = 'Feedback sent successfully!'
        
        # Redirect to a success page or render a template
        return render(request, 'resort2.html', {'success_message': success_message})
    
    # If the request method is not POST, render the form template
    return render(request, 'resort2.html')

def submit_form1(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Save the form data to the database
        contact = JSJS(name=name, email=email, message=message)
        contact.save()
        success_message = 'Feedback sent successfully!'
        
        # Redirect to a success page or render a template
        return render(request, 'new.html', {'success_message': success_message})
    
    # If the request method is not POST, render the form template
    return render(request, 'new.html')


def reservation_submit1(request):
    if request.method == 'POST':
        form_data = request.POST
        reservation = Reservation_JSJS(
            full_name=form_data['full-name'],
            email=form_data['email'],
            contact_number=form_data['contact-number'],
            address=form_data['address'],
            check_in_date=form_data['check-in-date'],
            check_out_date=form_data['check-out-date'],
            number_of_guests=form_data['number-of-guests'],
            room_type=form_data['room-type'],
            mode_of_payment=form_data['mode-of-payment'],
            total_amount=form_data['total-amount']
        )
        reservation.save()
        return render(request, 'new.html') 
    else:
        return render(request, 'new.html')  # Render the reservation form template
    
    
def reservation_submit2(request):
    if request.method == 'POST':
        full_name = request.POST.get('full-name')
        email = request.POST.get('email')
        contact_number = request.POST.get('contact-number')
        address = request.POST.get('address')
        check_in_date = request.POST.get('check-in-date')
        check_out_date = request.POST.get('check-out-date')
        number_of_guests = request.POST.get('number-of-guests')
        room_type = request.POST.getlist('room-type')
        mode_of_payment = request.POST.get('mode-of-payment')
        total_amount = request.POST.get('total-amount')

        # Create a new reservation instance
        reservation = Reservation_Coal(
            full_name=full_name,
            email=email,
            contact_number=contact_number,
            address=address,
            check_in_date=check_in_date,
            check_out_date=check_out_date,
            number_of_guests=number_of_guests,
            room_type=room_type,
            mode_of_payment=mode_of_payment,
            total_amount=total_amount
        )

        # Save the reservation instance to the database
        reservation.save()

        # Perform a redirect after successful form submission
        return render(request, 'resort2.html')  # Replace '/success' with your desired success URL

    return render(request, 'resort2.html') 

def reservation_submit3(request):
    if request.method == 'POST':
        full_name = request.POST.get('full-name')
        email = request.POST.get('email')
        contact_number = request.POST.get('contact-number')
        address = request.POST.get('address')
        cottage_type = request.POST.getlist('cottage-type')
        mode_of_payment = request.POST.get('mode-of-payment')
        total_amount = calculate_total_amount(cottage_type)  # Calculate the total amount based on selected cottage types

        # Create a new reservation instance
        reservation = Reservation_Viking(
            full_name=full_name,
            email=email,
            contact_number=contact_number,
            address=address,
            cottage_type=cottage_type,
            mode_of_payment=mode_of_payment,
            total_amount=total_amount
        )

        # Save the reservation instance to the database
        reservation.save()

        # Perform a redirect after successful form submission
        return render(request, 'resort3.html')   # Replace '/success' with your desired success URL

    return render(request, 'resort3.html')  # Replace 'reservation_form.html' with your actual HTML template path


def reservation_submit4(request):
    if request.method == 'POST':
        full_name = request.POST.get('full-name')
        email = request.POST.get('email')
        contact_number = request.POST.get('contact-number')
        address = request.POST.get('address')
        check_in_date = request.POST.get('check-in-date')
        check_out_date = request.POST.get('check-out-date')
        number_of_guests = request.POST.get('number-of-guests')
        room_type = request.POST.getlist('room-type')
        mode_of_payment = request.POST.get('mode-of-payment')
        total_amount = calculate_total_amount(room_type)  # Calculate the total amount based on selected room types

        # Create a new reservation instance
        reservation = Reservation_Terraces(
            full_name=full_name,
            email=email,
            contact_number=contact_number,
            address=address,
            check_in_date=check_in_date,
            check_out_date=check_out_date,
            number_of_guests=number_of_guests,
            room_type=room_type,
            mode_of_payment=mode_of_payment,
            total_amount=total_amount
        )

        # Save the reservation instance to the database
        reservation.save()

        # Perform a redirect after successful form submission
        return render(request, 'resort4.html')   # Replace '/success' with your desired success URL

    return render(request, 'resort4.html')  # Replace 'reservation_form.html' with your actual HTML template path

def calculate_total_amount(room_type):
    room_price_mapping = {
        'Overnight Room': 1400,
        'Aircon Room': 2000,
        'Room for day use': 1200,
        'Barkada Room': 500
    }

    total_amount = 0
    for room in room_type:
        if room in room_price_mapping:
            total_amount += room_price_mapping[room]

    return total_amount


def form_1(request):
    # Add your logic for resort_1 view
    return render(request, 'form1.html')

def form_2(request):
    # Add your logic for resort_1 view
    return render(request, 'form2.html')

def form_3(request):
    # Add your logic for resort_1 view
    return render(request, 'form3.html')

def form_4(request):
    # Add your logic for resort_1 view
    return render(request, 'form4.html')