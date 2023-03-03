<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Inertia\Inertia;
class ContactMail extends Mailable
{
    use Queueable, SerializesModels;
    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;

    }

    
    public function envelope()
    {
        return new Envelope(
            // from: new Address('example@example.com', 'Test Sender'),
            subject: 'Contact Us'
        );
    }

     
    public function content()
    {
        return new Content(
            view: 'emails.contact',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }

     public function build()
    {
        return $this->subject('Contact US - '. $this->data->subject)
                    ->view('emails.contact');
                    
    }
}
