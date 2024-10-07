from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class HomePageView(TemplateView):
    template_name = 'mysite/home.html'

class AboutPageView(TemplateView):
    template_name = 'mysite/about.html'

class ContactPageView(TemplateView):
    template_name = 'mysite/contact.html'