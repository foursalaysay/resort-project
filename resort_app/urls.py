from django.urls import path 
from . import views

urlpatterns = [
    path("", views.home, name='home'),  # Add this line for the default view
    path("resort1/", views.resort_1, name='resort_1'),
    path("resort2/", views.resort_2, name='resort_2'),
    path("resort3/", views.resort_3, name='resort_3'),
    path("resort4/", views.resort_4, name='resort_4'),
    path('submit4/', views.submit_form4, name='submit_form4'),
    path('submit3/', views.submit_form3, name='submit_form3'),
     path('submit2/', views.submit_form2, name='submit_form2'),
      path('submit1/', views.submit_form1, name='submit_form1'),
      path('reservation-submit1/', views.reservation_submit1, name='reservation_submit1'),
      path('reservation-submit2/', views.reservation_submit2, name='reservation_submit2'),
      path('reservation-submit3/', views.reservation_submit3, name='reservation_submit3'),
      path('reservation-submit4/', views.reservation_submit4, name='reservation_submit4'),
      path('form_1/', views.form_1, name='form_1'),
      path('form_2/', views.form_2, name='form_2'),
      path('form_3/', views.form_3, name='form_3'),
      path('form_4/', views.form_4, name='form_4'),
]
