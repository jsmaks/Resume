import { AuditLog } from '@prisma/client';

import { generateLogMessage } from '@/lib/generate-log-message';
import { Avatar, AvatarImage } from './ui/avatar';

interface ActivityItemProps {
  data: AuditLog;
}

export const ActivityItem = ({ data }: ActivityItemProps) => {
  return (
    <li className="flex items-center gap-x-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={data.userImage} />
      </Avatar>
      <div className="flex flex-col space-y-0.5">
        <p className="text-sm text-muted-foreground">
          <span></span>
        </p>
      </div>
    </li>
  );
};
