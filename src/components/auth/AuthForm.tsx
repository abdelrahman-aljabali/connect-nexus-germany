
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRole } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Mail, Key, User } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Gültige E-Mail-Adresse erforderlich"),
  password: z.string().min(8, "Passwort muss mindestens 8 Zeichen lang sein"),
});

const registerSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Gültige E-Mail-Adresse erforderlich"),
  password: z.string().min(8, "Passwort muss mindestens 8 Zeichen lang sein"),
  confirmPassword: z.string().min(8, "Passwort muss mindestens 8 Zeichen lang sein"),
  role: z.enum([UserRole.SELLER, UserRole.BUYER]),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwörter stimmen nicht überein",
  path: ["confirmPassword"],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(searchParams.get("register") ? "register" : "login");
  const userType = searchParams.get("type") === UserRole.BUYER ? UserRole.BUYER : UserRole.SELLER;

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: userType,
    },
  });

  const onLoginSubmit = (values: LoginFormValues) => {
    console.log("Demo Login values:", values);
    
    // Store demo user data in localStorage
    const demoUser = {
      id: "demo-user-1",
      name: "Max Mustermann",
      email: values.email || "max@beispiel.de",
      role: UserRole.SELLER,
      isLoggedIn: true
    };
    
    localStorage.setItem("demoUser", JSON.stringify(demoUser));
    
    toast({
      title: "Anmeldung erfolgreich",
      description: "Sie werden zum Dashboard weitergeleitet...",
    });
    
    // Redirect to dashboard after a short delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  const onRegisterSubmit = (values: RegisterFormValues) => {
    console.log("Demo Register values:", values);
    
    // Store demo user data in localStorage
    const demoUser = {
      id: "demo-user-1",
      name: values.name || "Max Mustermann",
      email: values.email || "max@beispiel.de",
      role: values.role,
      isLoggedIn: true
    };
    
    localStorage.setItem("demoUser", JSON.stringify(demoUser));
    
    toast({
      title: "Registrierung erfolgreich",
      description: "Sie werden zum Dashboard weitergeleitet...",
    });
    
    // Redirect to dashboard after a short delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-2xl shadow-soft border border-gray-100">
      <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-700 text-center">
          <strong>Demo Modus:</strong> Verwenden Sie beliebige Daten - echte Authentifizierung ist nicht erforderlich.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Registrieren</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Willkommen zurück</h1>
              <p className="text-sm text-gray-500 mt-2">
                Melden Sie sich bei Ihrem Konto an, um fortzufahren
              </p>
            </div>

            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            {...field}
                            placeholder="ihre.email@beispiel.de"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passwort</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            {...field}
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="rounded border-gray-300 text-brand-blue focus:ring-brand-blue/20"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600">
                      Angemeldet bleiben
                    </label>
                  </div>
                  <a
                    href="/forgot-password"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    Passwort vergessen?
                  </a>
                </div>

                <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  Anmelden
                </Button>
              </form>
            </Form>
          </div>
        </TabsContent>
        
        <TabsContent value="register">
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Konto erstellen</h1>
              <p className="text-sm text-gray-500 mt-2">
                Registrieren Sie sich, um Connect.Now zu nutzen
              </p>
            </div>

            <Form {...registerForm}>
              <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                <FormField
                  control={registerForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            {...field}
                            placeholder="Max Mustermann"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            {...field}
                            placeholder="ihre.email@beispiel.de"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passwort</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            {...field}
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passwort bestätigen</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            {...field}
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Ich bin ein:</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={UserRole.SELLER} id="seller" />
                            <Label htmlFor="seller">Verkäufer (Ich möchte mein Unternehmen übergeben)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={UserRole.BUYER} id="buyer" />
                            <Label htmlFor="buyer">Käufer (Ich suche ein Unternehmen zur Übernahme)</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-xs text-gray-500">
                  Mit der Registrierung akzeptieren Sie unsere{" "}
                  <a href="/terms" className="text-brand-blue hover:underline">AGB</a>{" "}
                  und{" "}
                  <a href="/privacy" className="text-brand-blue hover:underline">Datenschutzbestimmungen</a>.
                </div>

                <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  Registrieren
                </Button>
              </form>
            </Form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForm;
