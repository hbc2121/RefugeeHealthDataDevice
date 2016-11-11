from django.shortcuts import render
from django.shortcuts import HttpResponse

def index(response):
    return HttpResponse("hey")

