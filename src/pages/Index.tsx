import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [serverStatus, setServerStatus] = useState({ online: true, players: 47, maxPlayers: 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      setServerStatus(prev => ({
        ...prev,
        players: Math.floor(Math.random() * 100)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const donationPackages = [
    {
      title: 'VIP',
      price: 199,
      oldPrice: 299,
      features: ['Цветной ник', 'Приватные регионы', 'Кит /kit vip', '10 точек дома', 'Доступ к /fly'],
      popular: false
    },
    {
      title: 'PREMIUM',
      price: 399,
      oldPrice: 599,
      features: ['Всё из VIP', 'Уникальный префикс', 'Кит /kit premium', '25 точек дома', 'Бессмертие в PvP', 'Креативный режим'],
      popular: true
    },
    {
      title: 'ELITE',
      price: 799,
      oldPrice: 999,
      features: ['Всё из PREMIUM', 'Золотой ник', 'Кит /kit elite', 'Безлимит домов', 'Админ-панель', 'Кастомные команды'],
      popular: false
    }
  ];

  const rules = [
    { icon: 'Ban', title: 'Запрещен читерство', description: 'Использование запрещенных модов карается перманентным баном' },
    { icon: 'Users', title: 'Уважение к игрокам', description: 'Оскорбления, мат и токсичное поведение запрещены' },
    { icon: 'Home', title: 'Гриферство запрещено', description: 'Разрушение чужих построек без разрешения владельца' },
    { icon: 'Zap', title: 'Запрещен дюп', description: 'Использование багов для дублирования предметов' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Box" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">NIGHT-TIMES.SU</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#donate" className="text-foreground hover:text-primary transition-colors">Донат</a>
              <a href="#monitor" className="text-foreground hover:text-primary transition-colors">Мониторинг</a>
              <a href="#rules" className="text-foreground hover:text-primary transition-colors">Правила</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/661bcca0-ad17-4a82-8454-479b5bc4008a/files/76e868cb-f3d4-48a3-ba7c-fa5cbf3b202c.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-primary/20 text-primary border-primary/30 text-lg px-4 py-1">
              Сервер онлайн
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              NIGHT-TIMES.SU
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Лучший Minecraft сервер для выживания и приключений
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 group">
                <Icon name="Play" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6">
                <Icon name="Copy" size={20} className="mr-2" />
                play.night-times.su
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-12">
              <Card className="bg-card/50 border-border hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary">{serverStatus.players}</div>
                  <div className="text-muted-foreground mt-2">Игроков онлайн</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary">1.20.4</div>
                  <div className="text-muted-foreground mt-2">Версия</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary">99%</div>
                  <div className="text-muted-foreground mt-2">Аптайм</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Донат-пакеты</h2>
            <p className="text-muted-foreground text-lg">Поддержи сервер и получи уникальные привилегии</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationPackages.map((pkg) => (
              <Card 
                key={pkg.title} 
                className={`relative ${pkg.popular ? 'border-primary border-2 shadow-lg shadow-primary/20' : 'border-border'} hover:scale-105 transition-transform`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{pkg.title}</CardTitle>
                  <CardDescription className="text-center pt-4">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl font-bold text-primary">{pkg.price}₽</span>
                      <span className="text-xl text-muted-foreground line-through">{pkg.oldPrice}₽</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'} text-white`}
                  >
                    <Icon name="Heart" size={20} className="mr-2" />
                    Купить {pkg.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="monitor" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Мониторинг сервера</h2>
            <p className="text-muted-foreground text-lg">Актуальная информация о сервере в реальном времени</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                      <div>
                        <div className="text-sm text-muted-foreground">Статус</div>
                        <div className="text-2xl font-bold text-green-500">Онлайн</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="Users" size={24} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Игроки</div>
                        <div className="text-2xl font-bold">{serverStatus.players} / {serverStatus.maxPlayers}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="Globe" size={24} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">IP адрес</div>
                        <div className="text-xl font-mono">play.night-times.su</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Icon name="Zap" size={24} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Версия</div>
                        <div className="text-2xl font-bold">1.20.4</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="Server" size={24} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Режим</div>
                        <div className="text-2xl font-bold">Survival</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="TrendingUp" size={24} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Аптайм</div>
                        <div className="text-2xl font-bold">99.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Правила сервера</h2>
            <p className="text-muted-foreground text-lg">Соблюдай правила для комфортной игры</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rules.map((rule, i) => (
              <Card key={i} className="border-border hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={rule.icon} size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{rule.title}</h3>
                      <p className="text-muted-foreground">{rule.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжись с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-border hover:border-primary transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Send" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Telegram</h3>
                <p className="text-muted-foreground">@nighttimes_support</p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-primary transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="MessageCircle" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Discord</h3>
                <p className="text-muted-foreground">discord.gg/nighttimes</p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-primary transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">support@night-times.su</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Box" size={24} className="text-primary" />
            <span className="text-xl font-bold">NIGHT-TIMES.SU</span>
          </div>
          <p className="text-muted-foreground">© 2024 Night-Times. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;