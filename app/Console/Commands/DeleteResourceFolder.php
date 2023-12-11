<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class DeleteResourceFolder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete:resource-folders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $resourcesPath = resource_path();

        // Get all directories in the resources path
        $directories = File::directories($resourcesPath);

        // Loop through each directory and delete it
        foreach ($directories as $directory) {
            File::deleteDirectory($directory);
            $this->info("Deleted folder: $directory");
        }

        $this->info('All resource folders deleted successfully.');
    }
}
