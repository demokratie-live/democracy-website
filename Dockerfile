FROM php:7-apache

RUN docker-php-ext-install mysqli\
    && a2enmod rewrite &&\
    service apache2 restart