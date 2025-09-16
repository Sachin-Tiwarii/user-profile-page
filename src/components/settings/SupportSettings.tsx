import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, ExternalLink, ChevronRight, Book, Phone, Mail } from "lucide-react";

export function SupportSettings() {
  const supportOptions = [
    {
      title: "Help Center",
      description: "Browse our comprehensive help articles and guides",
      icon: Book,
      action: () => window.open("#", "_blank")
    },
    {
      title: "FAQ",
      description: "Find answers to frequently asked questions",
      icon: HelpCircle,
      action: () => window.open("#", "_blank") 
    },
    {
      title: "Contact Support",
      description: "Get help from our support team",
      icon: MessageCircle,
      action: () => window.open("mailto:support@example.com")
    },
    {
      title: "Phone Support",
      description: "Call us for immediate assistance",
      icon: Phone,
      action: () => window.open("tel:+1-800-123-4567")
    },
    {
      title: "Email Support",
      description: "Send us an email with your questions",
      icon: Mail,
      action: () => window.open("mailto:support@example.com")
    }
  ];

  return (
    <div className="settings-card slide-up">
      <div className="settings-section">
        <h2 className="text-xl font-semibold text-foreground mb-4">Help & Support</h2>
        
        <div className="space-y-2">
          {supportOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              className="setting-item group w-full text-left hover:bg-hover transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <option.icon className="setting-item-icon" />
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary-light rounded-lg border border-primary/20">
          <div className="flex items-start gap-3">
            <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium text-primary">Need immediate help?</h3>
              <p className="text-sm text-primary/80 mt-1">
                Our support team is available 24/7 to assist you with any questions or issues.
              </p>
              <Button 
                size="sm" 
                className="mt-3 bg-primary hover:bg-primary-hover text-primary-foreground"
                onClick={() => window.open("#", "_blank")}
              >
                Start Live Chat
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}