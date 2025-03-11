# cns-nanoprometheus-client

## Úvod

**cns-nanoprometheus-client** je robustní Python balíček určený pro odesílání a správu metrik v rámci systému Nanoprometheus. Tento balíček nabízí širokou škálu nástrojů a funkcionalit, mezi které patří:

- **MetricsClient** – klient pro odesílání metrik přes TCP socket.
- Základní metriky: **Counter**, **Gauge**, **Histogram** a **Summary**.
- Vestavěné metriky jako **AppBuildInfo**, **RequestDurationSeconds**, **ErrorsTotal** a **OutgoingRequestDurationSeconds**.
- Bezpečné obaly pro metriky: **SafeMetricsLog** a **SafeMetricsNoLog**.
- Pokročilé logování pomocí vestavěného modulu `logging` s možností rotačního logování.
- Dodatečné moduly jako **config.py** pro načítání konfigurace, **aggregator.py** pro agregaci metrik a **exceptions.py** pro vlastní chybové stavy.
- Volitelný CLI entry point pro snadné spuštění testovací funkce a demonstraci funkcionality.

Tento soubor README.md poskytuje podrobný návod, jak nainstalovat, konfigurovat a používat tento balíček.

## Obsah

- [Funkcionalita](#funkcionalita)
- [Instalace](#instalace)
- [Použití](#použití)
  - [Základní příklady](#základní-příklady)
  - [Konfigurace logování](#konfigurace-logování)
  - [CLI entry point](#cli-entry-point)
- [Distribuce a GitHub Pages](#distribuce-a-github-pages)
- [Testování a Debugging](#testování-a-debugging)
- [Příspěvky a rozvoj](#příspěvky-a-rozvoj)
- [Licence](#licence)
- [Závěr](#závěr)

## Funkcionalita

Balíček **cns-nanoprometheus-client** nabízí několik modulů:

- **client.py:** Obsahuje třídu `MetricsClient`, která umožňuje odesílání metrik ve formě JSON zpráv přes TCP socket.
- **metrics.py:** Implementuje základní metriky jako Counter, Gauge, Histogram a Summary. Dále obsahuje vestavěné metriky pro sledování klíčových událostí v aplikaci. Funkce `test()` volá další funkci `open_readme()`, která otevře specifikovanou URL ve výchozím prohlížeči.
- **safe_metrics.py:** Zajišťuje obaly pro metriky, které potlačují výjimky tak, aby nedošlo k pádu aplikace. Nabízí variantu s logováním i variantu bez logování.
- **logging_config.py:** Konfiguruje pokročilé logování pomocí `logging` a `RotatingFileHandler`.
- **config.py, aggregator.py a exceptions.py:** Poskytují dodatečnou funkcionalitu pro načítání konfigurace, agregaci metrik a definici vlastních chybových stavů.

## Instalace

Nejprve doporučujeme vytvořit virtuální prostředí:

```bash
python3 -m venv venv
source venv/bin/activate      # Na Linuxu/macOS
venv\Scripts\activate         # Na Windows
```

Balíček lze nainstalovat z PyPI:

pip install cns-nanoprometheus-client

Nebo, pokud pracujete s lokálním repozitářem, použijte režim vývoje:

pip install -e .


## Pouziti
### Zaklad
Po instalaci můžete balíček importovat a používat takto:
```
from cns_nanoprometheus_client import MetricsClient, Counter

# Vytvoření klienta pro odesílání metrik
client = MetricsClient(host='127.0.0.1', port=5000)
success = client.send_metric("test_metric", 42, {"env": "production"})
if success:
    print("Metrika byla úspěšně odeslána.")
else:
    print("Odeslání metriky selhalo.")

# Použití základní metriky Counter
counter = Counter("my_counter", "Testovací čítač")
counter.inc()
print("Aktuální hodnota čítače:", counter.get())
```

### Logging
```
import logging
from cns_nanoprometheus_client.logging_config import setup_logging

# Nastavení logování (výchozí logovací soubor a úroveň)
logger = setup_logging(log_file="custom.log", level=logging.INFO)
logger.info("Logování je úspěšně nakonfigurováno.")
```
