-- Add heating system field to leads table
ALTER TABLE public.leads 
ADD COLUMN heating_system TEXT;