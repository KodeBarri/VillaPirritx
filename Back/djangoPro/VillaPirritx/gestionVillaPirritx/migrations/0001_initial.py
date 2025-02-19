# Generated by Django 5.1.2 on 2024-10-18 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('raza', models.CharField(max_length=100)),
                ('edad', models.PositiveIntegerField()),
                ('problemas_fisicos', models.TextField(blank=True)),
                ('problemas_comportamiento', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Evento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_evento', models.CharField(choices=[('adopcion', 'Adopción'), ('charla', 'Charla'), ('recaudacion', 'Recaudación'), ('otro', 'Otro')], max_length=20)),
                ('fecha_evento', models.DateField()),
                ('lugar_evento', models.CharField(max_length=200)),
                ('hora_inicio', models.TimeField()),
                ('hora_fin', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Protectora',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero_telefono', models.CharField(max_length=15)),
                ('correo_electronico', models.EmailField(max_length=254)),
                ('cuenta_corriente', models.CharField(max_length=50)),
                ('direccion_teaming', models.CharField(max_length=200)),
            ],
        ),
    ]
