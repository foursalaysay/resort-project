from django.contrib import admin
from .models import WaterTerraces
from .models import Vikings
from .models import Coal
from .models import JSJS

from .models import Reservation_JSJS
from .models import Reservation_Coal
from .models import Reservation_Viking
from .models import Reservation_Terraces



admin.site.register(WaterTerraces)
admin.site.register(Vikings)
admin.site.register(Coal)
admin.site.register(JSJS)

admin.site.register(Reservation_JSJS)
admin.site.register(Reservation_Coal)
admin.site.register(Reservation_Viking)
admin.site.register(Reservation_Terraces)


